-- CreateTable
CREATE TABLE "datausers2" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "datausers2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "datausers2_email_key" ON "datausers2"("email");

-- CreateIndex
CREATE UNIQUE INDEX "datausers2_username_key" ON "datausers2"("username");
