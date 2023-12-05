-- CreateTable
CREATE TABLE "Ruta" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,

    CONSTRAINT "Ruta_pkey" PRIMARY KEY ("id")
);
