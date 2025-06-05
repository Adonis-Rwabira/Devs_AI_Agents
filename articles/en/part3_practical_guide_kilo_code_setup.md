# Tame AI and Boost Your Productivity: Smart Collaboration to Better Develop Your Software Projects

*(Recall of the Main Article Title)*

---
**Global Series Table of Contents**

*   [Part 1: AI in Development – From Frustration to Synergy: Asking the Right Questions to Get the Right Answers](#link-to-part-1)
*   [Part 2: Our Revolutionary Philosophy – AI, an Active Architect of Your Thoughts and Co-Creator of Context](#link-to-part-2)
*   **Part 3: The Augmented Developer's Arsenal – Detailed Configuration of Your AI Environment with Kilo Code** `(You are here)`
*   [Part 4: Phase 1 – The Art of Strategic Co-Design – Holistic Planning with Your "Senior Solution Architect & Adaptive Partner"](#) <!-- Placeholder link -->
*   [Part 5: Phase 2 – From Blueprint to Code Excellence – Precise and Evolutionary Implementation with Your "Senior Collaborative Full-Stack Developer"](#) <!-- Placeholder link -->
*   [Part 6: Mastering the Interaction – Essential Best Practices for Optimal Human-AI Synergy](#) <!-- Placeholder link -->
*   [Part 7: A Clear-Eyed View – Undeniable Assets, Required Investments, and Current Limitations of the Method](#) <!-- Placeholder link -->
*   [Part 8: Conclusion – Forging the Future of Software Engineering: The Developer Augmented by AI](#) <!-- Placeholder link -->
*   [Part 9: Going Further – Practical Resources, Community Engagement, and Your Next Challenge](#) <!-- Placeholder link -->

---

## Part 3: The Augmented Developer's Arsenal – Detailed Configuration of Your AI Environment with Kilo Code

**Table of Contents (Part 3)**

*   [3. Introduction: From Concepts to Practice – Equipping Your Workstation](#3-introduction-from-concepts-to-practice--equipping-your-workstation)
*   [3.1. Essential Software Foundations for Your Environment](#31-essential-software-foundations-for-your-environment)
*   [3.2. Accessing the Power of LLMs: Understanding Offers and Securing Your API Keys](#32-accessing-the-power-of-llms-understanding-offers-and-securing-your-api-keys)
    *   [3.2.1. The Core of Our Agents: The Google Gemini API (Focus on Gemini 2.5 Pro & Flash)](#321-the-core-of-our-agents-the-google-gemini-api-focus-on-gemini-25-pro--flash)
    *   [3.2.2. Your Daily Coding Allies: Gemini Code Assist & GitHub Copilot (Benefits of Free Tiers)](#322-your-daily-coding-allies-gemini-code-assist--github-copilot-benefits-of-free-tiers)
    *   [3.2.3. An Imperative Reminder: The Absolute Security of Your API Keys](#323-an-imperative-reminder-the-absolute-security-of-your-api-keys)
*   [3.3. Kilo Code: Your Command Center for AI Agents Integrated into VS Code](#33-kilo-code-your-command-center-for-ai-agents-integrated-into-vs-code)
    *   [3.3.1. Easy Installation of the Kilo Code Extension](#331-easy-installation-of-the-kilo-code-extension)
    *   [3.3.2. Initial Setup: Connecting Kilo Code to Your API Providers (Focus on Gemini)](#332-initial-setup-connecting-kilo-code-to-your-api-providers-focus-on-gemini)
    *   [3.3.3. (Optional) Using the Example `kilo-code-settings.json` File](#333-optional-using-the-example-kilo-code-settingsjson-file)
*   [3.4. Bringing Your Strategic Agents to Life: Integrating Custom Prompts from Our GitHub Repository](#34-bringing-your-strategic-agents-to-life-integrating-custom-prompts-from-our-github-repository)
    *   [3.4.1. Retrieving Prompt Files: A Simple `git clone`](#341-retrieving-prompt-files-a-simple-git-clone)
    *   [3.4.2. Exploring the `Devs_AI_Agents` Repository Content](#342-exploring-the-devs_ai_agents-repository-content)
    *   [3.4.3. Detailed Guide: Creating and Configuring Your "Custom Modes" in Kilo Code](#343-detailed-guide-creating-and-configuring-your-custom-modes-in-kilo-code)
    *   [3.4.4. The Power of "Context Mentions" (`@`) in Kilo Code to Enrich Interactions](#344-the-power-of-context-mentions--in-kilo-code-to-enrich-interactions)
*   [3.5. An Environment Primed for Augmented Collaboration](#35-an-environment-primed-for-augmented-collaboration)

---

*(Author's Note: After exploring the philosophy of our collaborative approach in Part 2, which positions AI as a true partner in thought, this third part of our "Tame AI and Boost Your Productivity" series is resolutely practical. We will together set up the necessary technical environment to interact smoothly and powerfully with our specialized AI agents. Follow these steps carefully to be ready to "tame AI" effectively!)*

---

### 3. Introduction: From Concepts to Practice – Equipping Your Workstation

The philosophy of synergistic human-AI collaboration, where artificial intelligence becomes an extension of our own design and development capabilities, is inspiring. But for it to materialize in your daily workflow, an adapted technical environment is essential. This section is your step-by-step guide to selecting, installing, and configuring the software tools, API access, and the VS Code extension **Kilo Code**, which will serve as the command center for our custom AI agents.

The objective here is straightforward: to get you fully operational so that, by the end of this part, you can begin to dialogue effectively with the "Senior Solution Architect & Adaptive Partner" and the "Senior Collaborative Full-Stack Developer" agents we have designed for you.

### 3.1. Essential Software Foundations for Your Environment

Before diving into AI specifics, let's ensure your development workstation has the following widely used software bases:

1.  **Visual Studio Code (VS Code): Your Primary Development Companion**
    *   If it's not already your code editor of choice, VS Code is highly recommended for this methodology. Its massive popularity within the developer community is no accident: it is lightweight, extraordinarily powerful, highly customizable through a vast ecosystem of extensions (including Kilo Code), and offers native integration with many tools.
    *   Download the latest version for free from the [official Visual Studio Code website](https://code.visualstudio.com/).
    *   `![Visual Studio Code Logo](path/to/your/image_vscode_logo.png "Visual Studio Code Logo")`
2.  **Git: The Guardian of Your Code and Our Configurations**
    *   Version control with Git is an indispensable practice in modern software development. Git will be essential for retrieving the prompt files for our AI agents from the dedicated GitHub repository and potentially tracking updates.
    *   If Git is not yet installed on your machine, visit the [official Git website](https://git-scm.com/downloads) to download and install it for your operating system. Familiarity with basic commands (`clone`, `pull`, `commit`, `push`) will be helpful.
3.  **Kilo Code (VS Code Extension): Your Interface with AI Agents**
    *   This is the VS Code extension that will enable us to bring our custom AI agents to life. Kilo Code is an open-source project (evolving from Roo Code and Cline) distinguished by its flexibility in defining "custom modes" (which we will use to instantiate our agents), its ability to connect to various LLM API providers, and its deep integration with the development environment (file system access, terminal, etc.), all under your control.
    *   Installation is done directly from within VS Code (detailed in section 3.3).
4.  **Node.js and npm (Optional, but Good Practice):**
    *   While not strictly mandatory for the core functionalities we will use with Kilo Code and Gemini APIs, having a recent LTS (Long-Term Support) version of Node.js (which includes npm, the Node Package Manager) installed is generally good practice for any developer. Many VS Code extensions and modern development tools (especially in the JavaScript/TypeScript ecosystem) depend on it.
    *   Download Node.js (which includes npm) from the [official Node.js website](https://nodejs.org/).

### 3.2. Accessing the Power of LLMs: Understanding Offers and Securing Your API Keys

Our AI agents "think" and "communicate" thanks to the power of remote Large Language Models (LLMs) accessed via Application Programming Interfaces (APIs). We will focus on using Google's Gemini models for their excellent performance-to-accessibility ratio, while also mentioning complementary tools.

#### 3.2.1. The Core of Our Agents: The Google Gemini API (Focus on Gemini 2.5 Pro & Flash)

To power our specialized agents configured in Kilo Code, you will need a Google API key granting access to Gemini models.

1.  **Obtaining Your Google Gemini API Key:**
    *   Navigate to [Google AI Studio](https://aistudio.google.com/).
    *   Sign in with your Google account. Accept the terms of service if it's your first visit.
    *   Once on the dashboard, look for an option like **"Get API key"** (often found in a side menu or a dedicated API section).
    *   You will likely need to create a new Google Cloud project (or select an existing one if you've used GCP services before). API key generation is often tied to a project.
    *   Click "Create API key" (or similar). A new unique alphanumeric key will be generated.
    *   **Crucial Action:** Copy this API key immediately and store it in an absolutely safe and private location (a password manager is ideal, or an encrypted local file). You generally cannot view the full key again after this initial generation.
    *   `![Screenshot of Google AI Studio interface showing where to click for "Get API key"](path/to/your/image_google_ai_studio_get_api_key.png "Obtaining a Google Gemini API key in Google AI Studio")`

2.  **Understanding Gemini Models and Their Access Plans (Information as of May 2025 – Always verify official documentation):**
    *   **Gemini 2.5 Pro (Preview):** Google's most advanced model currently in preview (the exact API model name might be like `gemini-2.5-pro-preview-MMDD` or `gemini-2.5-pro-latest` for the most recent preview version – always refer to the [official Gemini API models documentation](https://ai.google.dev/gemini-api/docs/models?hl=en)). It boasts superior reasoning capabilities and an extremely large context window (e.g., up to 1 million input tokens, with generous output limits like 65,536 tokens).
        *   **Preview Access & Free Tier via API:** Preview access may have specific conditions (e.g., sign-up). The associated free tier, if available for the API preview, might have stricter rate limits (RPM – requests per minute / RPD – requests per day) (e.g., potentially around 2 RPM / 50 RPD, similar to previous Pro free tiers). *It is imperative to check the exact access conditions and quotas of the "free tier" for Preview models on the official documentation when you configure your access.* This model is ideal for the most complex planning and analysis tasks of our "Senior Solution Architect," if the free tier throughput allows for your workflow.
    *   **Gemini 2.5 Flash:** This model is optimized for an excellent balance of high performance, potentially lower cost (if you move to paid plans), and increased response speed. It also features a very large context window.
        *   **Free Tier via API:** Rate limits for Gemini 2.5 Flash in free mode are generally much more comfortable for sustained interactive use (e.g., in the order of 15 RPM / 1500 RPD). This is an excellent default choice for most interactions with our agents in Kilo Code, especially for the "Senior Collaborative Full-Stack Developer."
    *   **Paid Plans (Google AI Platform / Vertex AI):** For intensive, professional use, or to benefit from service guarantees and higher rate limits, or to access enterprise features, using Gemini models via a billable Google Cloud project (on the Vertex AI platform) is recommended. (Note: The **GitHub Student Developer Pack**, if you are eligible, may occasionally include Google Cloud Platform credits, which could give you access to these paid options without initial direct cost for a period).
    *   **Your Single Source of Truth:** Always consult the [official Gemini API documentation](https://ai.google.dev/gemini-api/docs/models?hl=en) and the [Vertex AI pricing page for generative models](https://cloud.google.com/vertex-ai/generative-ai/pricing) for the most up-to-date and accurate information on available models, their exact capabilities, API names, and access/pricing terms. The AI landscape evolves very rapidly!

#### 3.2.2. Your Daily Coding Allies: Gemini Code Assist & GitHub Copilot (Benefits of Free Tiers and Synergy)

In parallel with using Kilo Code for our specialized agents (which excel at complex tasks and long dialogues due to their detailed system prompts), it's extremely beneficial to integrate lighter-weight coding assistants directly into VS Code for more immediate, "in-flow" assistance.

*   **Gemini Code Assist (Official Google VS Code Extension):**
    *   **What it offers:** Powered by Gemini models (up to version 2.5), it provides intelligent and contextual code completions, function and block generation, code explanations, and a chat interface for programming questions. A key strength is its ability to consider a large context window (up to 128,000 tokens for chat) based on the code currently open in your IDE.
    *   **Free Individual Plan (Information as of May 2025, based on your research):**
        *   **Code-related requests (generation, completion):** Typically high daily limits (e.g., up to 6,000 per day, approx. 180,000/month).
        *   **Chat requests:** Also comfortable daily limits (e.g., up to 240 per day).
        *   **Accessibility:** Easily installed as a VS Code extension (search "Gemini Code Assist"), connects to your Google account, and is generally ready to use without manual API key management for this specific use case.
        *   **Notable Limitations of the Free Plan:** Usually does not include fine-grained personalization based on analysis of your private source code repositories (often reserved for Enterprise plans) nor certain advanced integration features or enterprise-level guarantees.

*   **GitHub Copilot (GitHub/Microsoft VS Code Extension):**
    *   **What it offers:** Highly renowned for the quality of its inline code suggestions (autocompletion), its powerful contextual chat (Copilot Chat), and its project-wide code analysis capabilities. It leverages advanced models like GPT-4o and Claude 3.5 Sonnet.
    *   **Plans (Information as of May 2025, based on your research):**
        *   **Limited Free Plan (for some users):** GitHub sometimes offers free access with monthly quotas (e.g., up to 2,000 code completions and 50 chat requests per month). This plan is mainly for experiencing the tool and for very limited personal use. Clear indicators signal when limits are reached.
        *   **GitHub Student Developer Pack: A Major Advantage!** If you are an eligible student and your pack is active, it very often includes **free and much more extensive (or even unlimited for basic features) access to GitHub Copilot Individual** for the duration of your studies. This makes it an extremely powerful tool at no direct cost. Check your eligibility on the [GitHub Education website](https://education.github.com/pack).
        *   **Paid Plans (Individual, Business, Enterprise):** Necessary for unlimited use and advanced features (policy management, IP indemnification, etc.) if you are not eligible for the Student Pack or for intensive professional use.
    *   **Installation:** Search for "GitHub Copilot" and "GitHub Copilot Chat" in the VS Code marketplace and install them. Connection is via your GitHub account.

**Strategic Articulation of These Tools for Our Methodology:**
*   **Kilo Code + Gemini API (Pro/Flash) for Specialized Agents (Phase 1 & 2):** This is the **core of our methodology** for holistic planning and strategic, documented development assistance. Kilo Code's flexibility in creating agents with **long, complex, and instruction-rich system prompts** (those we provide) is essential. The very large context window of Gemini 2.5 is a decisive asset here, enabling our "Senior Solution Architect" and "Senior Collaborative Developer" agents to maintain a deep understanding of the project over time.
*   **Gemini Code Assist and/or GitHub Copilot as Daily Tactical Allies:** These tools are **perfect complements** for "on-the-fly" coding assistance: quick and relevant autocompletion, generation of small utility functions, answering ad-hoc programming questions, explaining selected code snippets, all directly within your workflow without needing to switch modes in Kilo Code.
    *   If you have full, free access to **GitHub Copilot via the GitHub Student Developer Pack**, leverage its power температура for these daily tasks. It's a significant advantage.
    *   **Gemini Code Assist** offers an excellent free alternative with very generous daily limits that will suit many developers for everyday assistance.
    *   There's no contraindication to using both herramientas, engaging whichever seems most relevant or performant for a given quick task.

#### 3.2.3. An Imperative Reminder: The Absolute Security of Your API Keys

It is crucial, and we cannot stress this enough, to treat your API keys (especially your Google Gemini API key used with Kilo Code) with the utmost care, as if they were the keys to your digital kingdom:
*   **NEVER write them directly into your source code.**
*   **NEVER share them with anyone.**
*   **NEVER commit them to a Git repository, even a private one.** A leaked API key can lead to significant costs if misused by third parties.
*   **Use Secure Mechanisms:** Kilo Code (and VS Code лицензионно) is designed to store API keys and other secrets securely, often using your operating system's keychain or encrypted storage linked to your user profile. When you configure an API provider in Kilo Code, this mechanism is used. Trust these systems and do not attempt to bypass their security.

### 3.3. Kilo Code: Your Command Center for AI Agents Integrated into VS Code

To orchestrate our specialized AI agents and implement our collaborative methodology, we will use [**Kilo Code**](https://kilocode.ai/), an open-source VS Code extension designed as an autonomous and highly customizable AI coding assistant. Its strength lies in its ability to manage different API providers, create "Custom Modes" (which we will use for our agents), and interact with your development environment (file system, terminal) under your control.

*(Note: While this article focuses on Kilo Code due to its advanced features and evolution from tools like Roo Code, the principles and prompts provided can often be adapted to other similar tools that support custom system instructions and IDE capability access.)*

#### 3.3.1. Easy Installation of the Kilo Code Extension

1.  **Open Visual Studio Code.**
2.  Navigate to the **Extensions** view by clicking the stacked squares icon in the side Activity Bar (or use the shortcut `Ctrl+Shift+X` or `Cmd+Shift+X` on Mac).
3.  In the extensions marketplace search bar, type `Kilo Code`.
4.  Locate the official extension (usually published by "Kilo AI" or a similar verified publisher, check download numbers and ratings for authenticity).
5.  Click the **"Install"** button. Once installation is complete, a reload or restart of VS Code might be suggested or required.

`![Screenshot of the VS Code marketplace showing the Kilo Code extension ready for installation](path/to/your/image_kilocode_extension_install.png "Installing the Kilo Code extension in VS Code")`
*(Alternative text: "VS Code extensions marketplace мужчин the Kilo Code extension tile prominently displayed with the 'Install' button clearly visible.")*

#### 3.3.2. Initial Setup: Connecting Kilo Code to Your API Providers (Focus on Gemini)

After installing Kilo Code, the first and most crucial step is to connect it to the Large Language Models your agents will use.

1.  **Access Kilo Code's API Provider Settings:**
    *   Kilo Code has a dedicated interface for managing connections to various API providers (Google Gemini, OpenAI, Anthropic, OpenRouter, local models via Ollama, etc.).
    *   Open the VS Code Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
    *   Type `Kilo Code` to filter commands and look for an option such as `Kilo Code: Manage API Providers`, `Kilo Code: Connect API Provider`, or `Kilo Code: Settings`. You might also find access to these settings via a dedicated Kilo Code icon in the Activity Bar or within its chat panel.
    *   For precise instructions, consult the "Connecting to an API Provider" section of the [official Kilo Code documentation](https://kilocode.ai/docs/getting-started/connecting-api-provider).

2.  **Add Google Generative AI (for Gemini Models) as a Provider:**
    *   In Kilo Code's API provider management interface, choose the option to add a new provider or configure an existing one. Select "Google Generative AI" (or "Google Vertex AI" if you are using that platform, depending on Kilo Code's options).
    *   Kilo Code will then prompt you for your **Google Gemini API Key** (the one you obtained from Google AI Studio in step 3.2.1).
    *   Paste your API key into the designated field. Kilo Code is designed to store this key securely, typically using VS Code's secret storage mechanisms, not in a plain text, versionable configuration file.
    *   You will likely also be able to set a name or alias for this provider configuration (e.g., "MyGoogleGemini") and potentially select a default model for this provider (e.g., `gemini-2.5-flash-latest`).

3.  **(Optional) Configure Other Providers:**
    *   If you have API keys for other models (OpenAI's GPT, Anthropic's Claude) or use an aggregation service like OpenRouter, you can configure them similarly by following the options Kilo Code provides and its documentation.

`![Screenshot of Kilo Code's interface for configuring API providers, showing a field for the Google Gemini API key](path/to/your/image_kilocode_api_provider_setup.png "Configuring the Google Gemini API provider in Kilo Code")`
*(Alternative text: "Kilo Code's API provider configuration interface, with a section for Google Generative AI where the user can input their API key and potentially choose a default model.")*

#### 3.3.3. (Optional) Using the Example `kilo-code-settings.json` File

Our GitHub repository (`Adonis-Rwabira/Devs_AI_Agents`) in the `/settings/` folder contains a file named `kilo-code-settings.json`. This file is an **example** of how some global Kilo Code settings *might* be structured if you wish to manage or share them via a JSON file.

*   **Content of the Example File:** It can illustrate how to define model aliases, default behaviors for certain actions (like action approval), or interface preferences. **Important: This example file in our repository does NOT and should NEVER contain REAL API keys.**
*   **How to Use It:** Kilo Code, as indicated in its [documentation on settings management](https://kilocode.ai/docs/features/settings-management), generally allows for importing and exporting its configuration.
    1.  First, explore the settings directly via Kilo Code's interface within VS Code (often accessible via `Ctrl+,` and searching for "Kilo Code", or via a dedicated Kilo Code command).
    2.  If you wish to use our example file as a base, you will need to adapt it to the exact structure Kilo Code expects (which can evolve) and import it using Kilo Code's "Import Settings" feature, or by merging relevant sections into your VS Code user `settings.json` file under Kilo Code's main configuration key.
    3.  **Caution is advised:** Ensure you understand each parameter before applying it. When in doubt, rely first on configuring Kilo Code via its graphical user interface.

### 3.4. Bringing Your Strategic Agents to Life: Integrating Custom Prompts from Our GitHub Repository

The "brain" and "personality" of our AI agents reside in their detailed system instructions (prompts). We have prepared these prompts for you in a public GitHub repository.

#### 3.4.1. Retrieving Prompt Files: A Simple `git clone`

1.  **Open your terminal or Git Bash.**
2.  **Navigate to a directory of your choice** on your computer where you wish to store these configurations (e.g., in your projects folder or a dedicated AI configurations folder).
3.  **Clone the `Devs_AI_Agents` GitHub repository** using the following command:
    ```bash
    git clone https://github.com/Adonis-Rwabira/Devs_AI_Agents.git
    ```
    This will create a local folder named `Devs_AI_Agents` containing all necessary files, including the prompts in the `/prompts/en/` and `/prompts/fr/` subdirectories.

#### 3.4.2. Exploring the `Devs_AI_Agents` Repository Content

Once the repository is cloned, familiarize yourself with its structure (detailed in the `README_EN.md` or `README_FR.md` of the repository). The prompt files of interest here are:

*   In `/prompts/en/`:
    *   `AGENT_SENIOR_SOLUTION_ARCHITECT_EN.md`
    *   `AGENT_SENIOR_COLLABORATIVE_DEVELOPER_EN.md`
    *   `AGENT_PROMPT_REFINEMENT_ANALYST_EN.md` (for your later use in prompt improvement)
*   Equivalent French versions are in `/prompts/fr/`.

#### 3.4.3. Detailed Guide: Creating and Configuring Your "Custom Modes" in Kilo Code

Kilo Code excels in its ability to let you define "Custom Modes." Each mode is essentially a distinct AI agent with its own mission, instructions (its system prompt), its assigned LLM model, and specific tools/capabilities. For detailed and always up-to-date instructions, refer to the [Kilo Code documentation on Custom Modes](https://kilocode.ai/docs/features/custom-modes). Here's the general process for configuring our two primary agents:

1.  **Access Kilo Code's Mode Management Interface:**
    *   Open Kilo Code's chat panel in VS Code. This is typically done by clicking its icon in the Activity Bar (if present) or via the Command Palette (`Ctrl+Shift+P`) by typing `Kilo Code: Focus on Chat View`.
    *   Once the Kilo Code chat is open, locate the mode selector (often a dropdown menu at the top or bottom of the chat window displaying the currently active mode).
    *   Click this selector and look for an option like `+ Create new mode...`, `Manage Custom Modes`, or a similar button. Click it to open the mode creation/editing interface.
    *   Alternatively, the VS Code Command Palette (`Ctrl+Shift+P`) might offer a direct command like `Kilo Code: Create Custom Mode` or `Kilo Code: Edit Custom Modes`.

2.  **Configure the Mode for the "Senior Solution Architect & Adaptive Partner" Agent:**
    *   In Kilo Code's mode creation/editing interface:
        *   **Mode Name:** Enter a clear, descriptive name that you'll easily recognize, for example: `Senior Solution Architect`
        *   **Mode Slug (Unique Identifier - optional but useful):** Kilo Code may auto-generate this (e.g., `senior-solution-architect`), or you can specify one (lowercase with hyphens).
        *   **System Prompt:** This is where the magic happens.
            *   Open the `prompts/en/AGENT_SENIOR_SOLUTION_ARCHITECT_EN.md` file (which you cloned) in VS Code or another text editor.
            *   Select the **entire** content of this file (`Ctrl+A` or `Cmd+A`).
            *   Copy it (`Ctrl+C` or `Cmd+C`).
            *   Paste it (`Ctrl+V` or `Cmd+V`) into the large text field labeled "System Prompt" (or "Instructions," "Persona," "Directives," depending on Kilo Code's exact UI terminology for this section).
        *   **Model (AI Model):**
            *   Select the Gemini model you want this agent to use. We recommend:
                *   `gemini-2.5-pro-preview-0605` (or the exact name of the latest Gemini 2.5 Pro Preview model available through your Kilo Code API configuration) for its analytical power and large context window, ideal for complex planning. Be mindful of free-tier rate limits.
                *   Alternatively, `gemini-2.5-flash-latest` for a good balance and more flexible free-tier rate limits.
            *   Ensure the API provider for this model (Google Generative AI) is correctly configured with your API key in Kilo Code (see section 3.3.2).
        *   **Tools / Capabilities:** Enable the tools (often managed via MCP servers in Kilo Code) this agent will need. For the "Senior Solution Architect":
            *   `File System (Read)`: Absolutely essential so it can read context files you provide (e.g., via `@file:path/to/your/existing_document.md`).
            *   `File System (Write)`: Very useful if you want it to help you generate or update drafts of your `.md` documents directly (with your approval for each action). **Important:** Ensure write action approval is set to "manual" in Kilo Code's global settings for control, as per [Kilo Code's documentation on action approval](https://kilocode.ai/docs/features/auto-approving-actions).
            *   `Web Search` (e.g., via a Brave Search MCP Tool if enabled): Can be useful for researching contextual information or examples.
            *   *(Multimodal Capabilities for Image Analysis):* If your selected Gemini model is multimodal (like Gemini 2.5 Pro) and Kilo Code exposes a specific capability for it to analyze images you might reference (e.g., via URL or an upload mechanism if Kilo Code supports it in the future), enable that capability. Otherwise, image analysis will be based on your detailed textual description of the image to the agent, or by providing a URL to the image if it has web access capability.
        *   **Save** this custom mode configuration.

3.  **Configure the Mode for the "Senior Collaborative Full-Stack Developer" Agent:**
    *   Repeat the process of creating a new custom mode.
    *   **Mode Name:** `Senior Collaborative Developer`
    *   **System Prompt:** Copy and paste the entire content of the `prompts/en/AGENT_SENIOR_COLLABORATIVE_DEVELOPER_EN.md` file.
    *   **Model:** Choose a Gemini model (Pro or Flash, depending on your needs and plan limits). `gemini-2.5-flash-latest` is often a good choice for responsive coding assistance.
    *   **Tools / Capabilities:** For the "Senior Collaborative Developer," be sure to enable:
        *   `File System (Read/Write)`: To read specifications and existing code, and to propose code modifications or new files (always with your approval for writes).
        *   `Terminal Access`: Can be very useful for the agent to suggest commands (e.g., `npm install new-lib`, `git status`, `python -m pytest my_module_test.py`) or, with your explicit permission each time, execute them. Be particularly cautious and configure a list of `allowedCommands` in Kilo Code's global settings if possible.
        *   `Browser Control` (via an MCP tool like Puppeteer or Playwright if enabled and relevant to your workflow): Could be used for advanced tasks like assisting with End-to-End tests or verifying page rendering.
        *   `Git Tools` (via an MCP tool if enabled): Could allow the agent to help you with more complex Git operations.
    *   **Save** this custom mode configuration.

`![Screenshot of Kilo Code's Custom Mode creation/editing interface, showing fields for Name, Slug (identifier), the large System Prompt area, AI Model selection (e.g., Gemini 2.5 Pro), and a list of activatable Tools/Capabilities with checkboxes.](path/to/your/image_kilocode_custom_mode_configuration_detailed.png "Detailed configuration of a custom mode in Kilo Code for a personalized AI agent.")`
*(Alternative text: "Kilo Code's custom mode configuration window. Visible fields include Mode Name, a large multi-line System Prompt area where the .md file content is pasted, a dropdown menu for AI Model selection (e.g., gemini-2.5-pro-preview), and a series of checkboxes or toggles to activate various agent capabilities like File System access, Terminal execution, or Browser control.")*

#### 3.4.4. The Power of "Context Mentions" (`@`) in Kilo Code to Enrich Interactions

Once your modes (agents) are configured and ready to use, never forget to leverage the power of Kilo Code's **"Context Mentions"** during your discussions. As detailed in the [Kilo Code documentation on context mentions](https://kilocode.ai/docs/basic-usage/context-mentions) (or similar page), you can dynamically and an_object_inject_generic_term_here inject content into the conversation using prefixes like:

*   `@file:path/to/your/file.md` (or `.py`, `.js`, `.java`, etc.) for the agent to read and consider the content of that specific file in its response. This is how you will grant it access to your specification documents, existing code portions, etc.
*   `@folder:path/to/your/folder/` to provide the context of an entire folder (Kilo Code might then list files or, if the model is powerful enough, extract structural information).
*   `@url:https://relevant-online-documentation.com` for the agent to (if it has web access capability via an enabled MCP tool, like "Brave Search" or "Fetch") consult a webpage for up-to-date information or technical details.
*   Other Kilo Code-specific mentions (e.g., `@issue`, `@terminal_output`) may exist to reference specific elements within your workspace.

Judicious use of these context mentions is absolutely essential for your agents to have the most relevant and up-to-date information to assist you effectively, in line with our philosophy of "explicit context."

### 3.5. An Environment Primed for Augmented Collaboration

Congratulations! If you've followed these steps, your development environment is now truly "augmented." You have:
*   The foundational tools (VS Code, Git).
*   Configured access to Google's powerful Gemini AI models via their APIs.
*   Complementary coding assistants (Gemini Code Assist, GitHub Copilot) for daily productivity.
*   And most importantly, **Kilo Code configured with two highly specialized and personalized AI agents**, ready to become your strategic partners for planning and implementing your software projects.

You have assembled your arsenal. The next part will dive into the practical application of Phase 1 with our "Senior Solution Architect & Adaptive Partner."

*(End of Part 3)*

---

**In the Next Part:**

We are now equipped! [Part 4: Phase 1 – The Art of Strategic Co-Design – Holistic Planning with Your "Senior Solution Architect & Adaptive Partner"](#) <!-- Link to Part 4 --> will show you how to engage in dialogue with your first specialized agent to define the vision, elicit requirements, design the architecture, specify the UI/UX, and model the database for your project, thereby building an unshakeable foundation.

**Read the Previous Part:**
*   [Part 2: Our Revolutionary Philosophy – AI, an Active Architect of Your Thoughts and Co-Creator of Context](#link-to-part-2)

---
**By: Adonis Rwabira**
*Full-Stack Developer and Software Engineer*
*Goma, Democratic Republic of Congo*
*adonisbitigaywa@gmail.com*
*LinkedIn Profile: [Your LinkedIn URL (if you wish to share)]*
*GitHub Repository: [https://github.com/Adonis-Rwabira/Devs_AI_Agents](https://github.com/Adonis-Rwabira/Devs_AI_Agents)*