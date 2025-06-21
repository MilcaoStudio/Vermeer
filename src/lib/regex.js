// Matches a hex code, rgb(a), or hsl(a), with optional position
export const gradientStopRegex =
/(?:(#[0-9a-fA-F]{6,8})|(rgba?\(.+\))|(hsla?\(.+\)))\s*(?:(\d+)%)?/;