-- CreateTable
CREATE TABLE "Coinoscope" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "remainingQueryCount" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombreOriginal" TEXT NOT NULL,
    "calendarDate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Localization" (
    "top" REAL NOT NULL,
    "left" REAL NOT NULL,
    "bottom" REAL NOT NULL,
    "right" REAL NOT NULL,
    "coinoscopeId" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "Localization_coinoscopeId_fkey" FOREIGN KEY ("coinoscopeId") REFERENCES "Coinoscope" ("key") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imagePathKey" TEXT,
    "nominal" TEXT,
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
    CONSTRAINT "Item_coinoscopeId_fkey" FOREIGN KEY ("coinoscopeId") REFERENCES "Coinoscope" ("key") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Coinoscope_key_key" ON "Coinoscope"("key");
