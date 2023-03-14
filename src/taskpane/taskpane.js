/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office */

Office.onReady((info) => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  /**
   * Insert your Outlook code here
   */
  Office.context.mailbox.displayNewMessageForm({
    toRecipients: [process.env.SUPPORT_EMAIL_ADDRESS],
    subject: process.env.COMPANY_NAME + " - Phishing Report ( Subject: " + Office.context.mailbox.item.subject + " )",
    htmlBody: "Hello,<br><br>I believe the attached email is a scam or phishing email.<br><br>Thanks.",
    attachments: [
      {
        type: "item",
        itemId: Office.context.mailbox.item.itemId,
        name: Office.context.mailbox.item.subject + ".msg",
      },
    ],
  });
}
