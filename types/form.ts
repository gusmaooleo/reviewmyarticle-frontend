export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  name?: string;
};

export type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    labelText: string;
    name?: string;
  };
