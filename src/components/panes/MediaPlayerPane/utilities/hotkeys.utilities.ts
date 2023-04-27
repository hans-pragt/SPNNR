export function isFromInputField(event : KeyboardEvent) {
  if (!event) {
    return false;
  }

  const target = event.target as HTMLElement;
  return (
    (target.nodeName === 'INPUT') || 
    (target.nodeName === 'SELECT') || 
    (target.nodeName === 'TEXTAREA')
  );
}