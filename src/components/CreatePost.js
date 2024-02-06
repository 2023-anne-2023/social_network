import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { profile_id } from "@vercel/postgres";

export default async function CreatePost() {
  const post = await sql`SELECT * FROM post`;

  async function addNewPost(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");
    const file = formData.get("image");

    await sql`INSERT INTO post (title, content,profile_id) VALUES ( ${title}, ${content},{profile_id})`;
    revalidatePath("/");
    redirect("/");
  }

  return (
    <div>
      <h2>Create Post</h2>
      <form action={addNewPost}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Content"></textarea>
        <input name="file" placeholder="Images" type="file" />

        <button>Submit</button>
      </form>
      {post.rows.map((post) => {
        return (
          <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
