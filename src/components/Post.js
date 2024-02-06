"use client";
import * as Form from "@radix-ui/react-form";
import * as Avatar from "@radix-ui/react-avatar";
import { HeartIcon } from "@radix-ui/react-icons";

const Post = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: 20 }}>
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            CT
          </Avatar.Fallback>
        </Avatar.Root>
      </div>

      <Form.Root className="FormRoot">
        <Form.Field className="FormField">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          ></div>
        </Form.Field>
        <Form.Field className="FormField">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Message
              className="FormMessage"
              match="valueMissing"
            ></Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className="Textarea"
              required
              placeholder="Type your Post"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="Button" style={{ marginTop: 10 }}>
            Send
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default Post;
