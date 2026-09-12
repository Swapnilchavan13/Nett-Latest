import { createFileRoute } from "@tanstack/react-router";
import { FillForm } from "../components/FillForm"; // Adjust relative path as needed

export const Route = createFileRoute("/fillform")({
  component: FillForm,
});