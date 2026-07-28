import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  title?: string;
  message: string;
}

export function ErrorMessage({
  title = "Something went wrong",
  message,
}: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-destructive"
    >
      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm mt-1 opacity-90">{message}</p>
      </div>
    </div>
  );
}
