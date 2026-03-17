import { getDatabase, ref, push } from "firebase/database"
import { getDeviceType } from "@/lib/device"

export function saveVisit() {
  const db = getDatabase()

  const device = getDeviceType()

  push(ref(db, "analytics"), {
    timestamp: Date.now(),
    device,
  })
}