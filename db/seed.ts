import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  try {
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });

    console.log("Database seeded successfully");
  } catch (error: unknown) {
    if (typeof error === "string") {
      console.log(error.toUpperCase());
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

main();
