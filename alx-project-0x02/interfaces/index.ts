export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onSubmit: (data: { title: string; content: string }) => void;
  onClose: () => void;
}

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
