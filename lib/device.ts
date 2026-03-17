export function getDeviceType() {
  const ua = navigator.userAgent

  if (/mobile|android|iphone|ipad/i.test(ua)) {
    return "mobile"
  }

  return "desktop"
}