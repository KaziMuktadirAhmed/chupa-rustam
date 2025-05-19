// Simple utility to check if DOM is available
export default function canUseDOM(): boolean {
  return typeof window !== 'undefined' && window.document !== null;
}
