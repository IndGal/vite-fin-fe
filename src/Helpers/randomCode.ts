import randomstring from "randomstring";

export function generateCode(): string {
  return randomstring.generate(
    {
      charset: "numeric",
      length: 7
    }
  )
}