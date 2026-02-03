import {z} from "zod";

export const DogumentationSchema = z.object({
  name: z.object({
    programmatic: z.string().meta({
      title: "Programmatic Name",
      description: "The internal name used in code.",
    }),
    display: z.string(),
  }),
  version: z.string(),
});

export type Dogumentation = z.infer<typeof DogumentationSchema>;