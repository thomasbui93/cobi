import { Router } from "express"

const router = Router()

import entry from "./entry"
import blog from "./blog"

router.get("/", entry)
router.get("/:blogId", blog)

export default router