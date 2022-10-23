-- CreateTable
CREATE TABLE "Coinoscope" (
    "key" TEXT NOT NULL,
    "remainingQueryCount" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombreOriginal" TEXT NOT NULL,
    "calendarDate" TEXT,

    CONSTRAINT "Coinoscope_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "Localization" (
    "top" DOUBLE PRECISION NOT NULL,
    "left" DOUBLE PRECISION NOT NULL,
    "bottom" DOUBLE PRECISION NOT NULL,
    "right" DOUBLE PRECISION NOT NULL,
    "coinoscopeId" TEXT NOT NULL,

    CONSTRAINT "Localization_pkey" PRIMARY KEY ("coinoscopeId")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "imagePathKey" TEXT,
    "nominal" TEXT,
    "isCorrecto" BOOLEAN NOT NULL DEFAULT false,
    "currencyName" TEXT,
    "openInBrowser" BOOLEAN,
    "pageUrl" TEXT,
    "year" TEXT,
    "page" TEXT,
    "countryName" TEXT,
    "yearInterval" TEXT,
    "canEstimateValue" BOOLEAN,
    "title" TEXT,
    "coinoscopeId" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coinoscope_key_key" ON "Coinoscope"("key");

-- AddForeignKey
ALTER TABLE "Localization" ADD CONSTRAINT "Localization_coinoscopeId_fkey" FOREIGN KEY ("coinoscopeId") REFERENCES "Coinoscope"("key") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_coinoscopeId_fkey" FOREIGN KEY ("coinoscopeId") REFERENCES "Coinoscope"("key") ON DELETE RESTRICT ON UPDATE CASCADE;
