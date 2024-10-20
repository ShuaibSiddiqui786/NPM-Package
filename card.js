#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
const request = require("request");
const path = require("path");
const ora = require("ora");
const cliSpinners = require("cli-spinners");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:shuaibsiddiquix1@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Download my ${chalk.magentaBright.bold("Resume")}?`,

        value: () => {
          // cliSpinners.dots;
          const loader = ora({
            text: " Downloading Resume",
            spinner: cliSpinners.material,
          }).start();

          let pipe = request(
            https://drive.google.com/file/d/1vwrrO6etxa6v0Lan7Vf9jx8yzwfTXCzC/view?usp=drivesdk
          ).pipe(
            fs.createWriteStream("./shuaib-resume.pdf") // Change the file extension to .pdf
          );

          pipe.on("finish", function () {
            let downloadPath = path.join(process.cwd(), "shuaib-resume.pdf"); // Change the file extension to .pdf
            console.log(`\nResume Downloaded at ${downloadPath} \n`);
            open(downloadPath);
            loader.stop();
          });
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Hasta la vista.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("                 Shuaib Siddiqui"),
  handle: chalk.white("@shuaibsiddiqui786"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("shuaibsiddiqui"),
  github: chalk.gray("https://github.com/") + chalk.green("shuaibsiddiqui786"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("sereneshuaib"),
  codepen: chalk.gray("https://codepen.io/") + chalk.red("Shuaib-Siddiqui"),
  web: chalk.cyan("https://shuaib-siddiqui-portfolio.framer.ai/"),
  npx: chalk.red("npx") + " " + chalk.white("shuaibsiddiqui"),

  labelWork: chalk.red.bold("           I am a FullStack Developer"),
  labelWork: chalk.red.bold("          Learning DevSecOps and MLOps"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelcodepen: chalk.white.bold("    Codepen:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}`,
    ``,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelcodepen}  ${data.codepen}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("  I am currently looking for new opportunities,")}`,
    `${chalk.italic("  my inbox is always open. Whether you have a")}`,
    `${chalk.italic("  question or just want to say hi, I will try ")}`,
    `${chalk.italic("  my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());