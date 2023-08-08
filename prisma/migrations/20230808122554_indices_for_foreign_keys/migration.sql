-- CreateIndex
CREATE INDEX `userId` ON `Account`(`userId`);

-- CreateIndex
CREATE INDEX `userId` ON `Event`(`userId`);

-- CreateIndex
CREATE INDEX `eventId` ON `Question`(`eventId`);

-- CreateIndex
CREATE INDEX `userId` ON `Session`(`userId`);
