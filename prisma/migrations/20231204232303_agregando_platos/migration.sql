-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "costo" INTEGER NOT NULL,
    "imagen" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
