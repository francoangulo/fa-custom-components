import "./MyLabel.css";

interface Props {
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
   * Color of the button
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Color of the text
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{
        color: fontColor,
        ...(allCaps && { textTransform: "uppercase" }),
      }}
    >
      {label}
    </span>
  );
};
