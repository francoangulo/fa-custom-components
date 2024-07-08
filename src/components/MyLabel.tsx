import "./MyLabel.css";

export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * All caps text
   */
  allCaps?: boolean;
  /**
   * Predefined color of the button
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Custom color of the text
   */
  fontColor?: string;
  /**
   * Background color of the button
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{
        color: fontColor,
        ...(allCaps && { textTransform: "uppercase" }),
        backgroundColor,
      }}
    >
      {label}
    </span>
  );
};
