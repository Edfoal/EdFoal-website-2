type LogLevel = "info" | "warn" | "error";

interface LogPayload {
  message: string;
  context?: Record<string, unknown>;
  error?: unknown;
}

class Logger {
  private isDev = process.env.NODE_ENV !== "production";

  private format(level: LogLevel, payload: LogPayload) {
    return {
      timestamp: new Date().toISOString(),
      level,
      message: payload.message,
      ...payload.context,
      ...(payload.error ? { error: String(payload.error) } : {}),
    };
  }

  info(message: string, context?: Record<string, unknown>) {
    if (this.isDev) {
      console.info(`[INFO]: ${message}`, context || "");
    } else {
      console.info(JSON.stringify(this.format("info", { message, context })));
    }
  }

  warn(message: string, context?: Record<string, unknown>) {
    if (this.isDev) {
      console.warn(`[WARN]: ${message}`, context || "");
    } else {
      console.warn(JSON.stringify(this.format("warn", { message, context })));
    }
  }

  error(message: string, error?: unknown, context?: Record<string, unknown>) {
    if (this.isDev) {
      console.error(`[ERROR]: ${message}`, error || "", context || "");
    } else {
      console.error(
        JSON.stringify(this.format("error", { message, error, context }))
      );
    }
  }
}

export const logger = new Logger();
