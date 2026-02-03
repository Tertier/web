import * as z from "zod";

import {DogumentationSchema} from "@/model/external/dogumentation";

const json = z.toJSONSchema(DogumentationSchema, {
  target: "draft-2020-12",
  reused: "ref",
  cycles: "ref",
});

process.stdout.write(JSON.stringify(json));
