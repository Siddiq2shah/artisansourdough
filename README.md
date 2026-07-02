# Wild Rise Sourdough Website

A modern, responsive, and high-performance frontend web application built for an artisan sourdough bakery. This project features a clean, single-page architecture that showcases products, a gallery, and a unified contact/wholesale inquiry system.

## 🛠 Tech Stack

This project leverages a modern React ecosystem for optimal developer experience and frontend performance:

*   **Framework:** [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Routing:** [TanStack Router](https://tanstack.com/router/latest) for type-safe routing
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI Primitives)
*   **Form Handling:** [Web3Forms](https://web3forms.com/) for serverless, spam-protected form submissions
*   **Package Manager:** [Bun](https://bun.sh/)

## ✨ Key Features

*   **Unified Contact Architecture:** A consolidated, single-page contact route (`/contact`) that dynamically handles both general customer inquiries and wholesale requests.
*   **Serverless Spam Protection:** Integrated with Web3Forms to securely handle email submissions without requiring a custom backend, significantly reducing spam.
*   **Modern UI/UX:** Utilizes accessible, highly-customizable components (Accordion, Dialog, Drawer, Carousel) tailored to a high-end bakery aesthetic.
*   **Type-Safe File Routing:** Uses TanStack Router's file-based routing (`routeTree.gen.ts`) to ensure reliable and strictly-typed page navigation.

## 🚀 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine. 

### 1. Installation

Clone the repository and install the dependencies:

```bash
# Install dependencies using Bun
bun install
