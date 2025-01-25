"use client";
import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Team Up is designed to connect you with the right people to bring your ideas to life. Whether you’re a solo innovator, a startup, or an established team, our platform helps you collaborate effortlessly. From finding skilled professionals to managing projects efficiently, Team Up streamlines the entire process. Join a thriving community where teamwork fuels success and innovation knows no bounds.

`;

export function TextGenerateEffect_sub() {
  return <TextGenerateEffect words={words} />;
}
