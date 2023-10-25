-- CreateTable
CREATE TABLE "book" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);
