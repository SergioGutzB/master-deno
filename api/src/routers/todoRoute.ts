import { Router } from "../../deps.ts";
import {get as getTodo} from '../controllers/todoController.ts';

const router = new Router();
router.get("/",getTodo)

router.post("/", (c: any) => {
  console.log("post");
  c.response.body = "post";
});
router.delete("/", (c: any) => {
  console.log("delete");
  c.response.body = "delete";
});
router.put("/", (c: any) => {
  console.log("put");
  c.response.body = "put";
});

export default router;
