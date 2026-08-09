# ============================================
# Next.js Portfolio - Production Dockerfile
# ============================================

# Base image
FROM node:22-bookworm-slim AS base


# ============================================
# 1. Dependencies
# ============================================

FROM base AS deps

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci


# ============================================
# 2. Build Next.js application
# ============================================

FROM base AS builder

WORKDIR /app

# Copy installed dependencies
COPY --from=deps /app/node\_modules ./node_modules

# Copy project source
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Build application
RUN npm run build


# ============================================
# 3. Production image
# ============================================

FROM base AS runner

WORKDIR /app

# Production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create non-root user
RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs nextjs

# Copy public folder
COPY --from=builder /app/public ./public

# Create Next.js cache directory
RUN mkdir .next && \
    chown nextjs:nodejs .next

# Copy standalone Next.js server
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static files
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Run as non-root user
USER nextjs

# Expose application port
EXPOSE 3000

# Start Next.js standalone server
CMD ["node", "server.js"]