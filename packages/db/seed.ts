import { prisma } from ".";

async function main() {
  const example = await prisma.example.create({
    data: {
      content: "Hello World!",
    },
  });
  console.log("Created example:", example);
}

main();
