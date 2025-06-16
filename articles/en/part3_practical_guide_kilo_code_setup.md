# Part 3 : Kilo Code and AI Agents Setup Guide

## Table of Contents

*   [Part 1 : AI in Development – From Frustration to Synergy](part1_intro_ai_development.md)
*   [Part 2 : Philosophy of Collaboration](part2_philosophy_collaboration.md)
*   **Part 3 : Kilo Code and AI Agents Setup Guide**
*   [Part 4 : Phase 1 – Holistic Planning](part4_phase1_planning_ai_architect.md)
*   [Part 5 : Phase 2 – Collaborative Implementation](part5_phase2_implementation_ai_developer.md)
*   [Part 6 : Best Practices for Synergy](part6_best_practices_synergy.md)
*   [Part 7 : Critical Analysis of the Methodology](part7_critical_analysis_methodology.md)
*   [Part 8 : Conclusion – Augmented Development](part8_conclusion_augmented_development.md)
*   [Part 9 : Resources and Community](part9_resources_community.md)

---

- **Part 3 : Kilo Code and AI Agents Setup Guide**
    - [Equipping Your Workstation](#equipping-your-workstation)
    - [Essential Software Foundations](#essential-software-foundations)
    - [Accessing the Power of LLMs](#accessing-the-power-of-llms)
      - [The Google Gemini API](#the-google-gemini-api)
      - [Gemini Code Assist & GitHub Copilot](#gemini-code-assist--github-copilot)
      - [Security of Your API Keys](#security-of-your-api-keys)
    - [Kilo Code](#kilo-code)
      - [Installation of the Kilo Code Extension](#installation-of-the-kilo-code-extension)
      - [Connecting Kilo Code to Your API Providers](#connecting-kilo-code-to-your-api-providers)
      - [Using the Example kilo-code-settings.json File](#using-the-example-kilo-code-settingsjson-file)
    - [Integrating Custom Prompts](#integrating-custom-prompts)
      - [Retrieving Prompt Files](#retrieving-prompt-files)
      - [Exploring the Devs_AI_Agents Repository](#exploring-the-devs_ai_agents-repository)
      - [Creating and Configuring Your Custom Modes](#creating-and-configuring-your-custom-modes)
      - [The Power of Context Mentions](#the-power-of-context-mentions)
    - [An Environment Primed](#an-environment-primed)

---

### Equipping Your Workstation

The philosophy of synergistic human-AI collaboration, where artificial intelligence becomes an extension of our own design and development capabilities, is inspiring. But for it to materialize in your daily workflow, an adapted technical environment is essential. This section is your step-by-step guide to selecting, installing, and configuring the software tools, API access to Large Language Models (**LLM**), and the VS Code extension **Kilo Code**, which will serve as the command center for our custom AI agents.

The objective here is straightforward: to get you fully operational so that, by the end of this part, you can begin to dialogue effectively with the **Senior Solution Architect & Adaptive Partner** and the **Senior Collaborative Full-Stack Developer** agents we have designed for you.

### Essential Software Foundations

Before diving into AI specifics, let's ensure your development workstation has the following widely used software bases:

1.  **Visual Studio Code (VS Code) : Your Primary Development Companion**
    *   If it's not already your code editor of choice, VS Code is highly recommended for this methodology. Its massive popularity within the developer community is no accident: it is lightweight, extraordinarily powerful, highly customizable through a vast ecosystem of extensions, and offers native integration with many tools, including [Kilo Code](https://kilocode.ai/).
    *   Download the latest version for free from the [official Visual Studio Code website](https://code.visualstudio.com/).
2.  **Git : The Guardian of Your Code and Our Configurations**
    *   Version control with Git is an indispensable practice in modern software development. Git will be essential for retrieving the prompt files for our AI agents from the dedicated GitHub repository and potentially tracking updates.
    *   If Git is not yet installed on your machine, visit the [official Git website](https://git-scm.com/downloads) to download and install it for your operating system. It will be essential not only for managing your own source code but also for retrieving and potentially tracking updates to our agents' prompt files, hosted on a GitHub repository. Familiarity with basic commands (`clone`, `pull`, `commit`, `push`) will be helpful.
3.  **Kilo Code (VS Code Extension) : Your Interface with AI Agents**
    *   This is the VS Code extension that will enable us to bring our custom AI agents to life. Kilo Code is an open-source project (evolving from Roo Code and Cline) distinguished by its flexibility in defining **custom modes** (which we will use to instantiate our agents), its ability to connect to various LLM API providers, and its deep integration with the development environment (file system access, terminal, etc.), all under your control.
    *   Installation is done directly from within VS Code (detailed in [section 3.3](#33-kilo-code)).
4.  **Node.js and npm (Optional, but Good Practice) :**
    *   While not strictly mandatory for the core functionalities we will use with Kilo Code and Gemini APIs, having a recent LTS (Long-Term Support) version of Node.js (which includes npm, the Node Package Manager) installed is generally good practice for any developer. Many VS Code extensions and modern development tools (especially in the JavaScript/TypeScript ecosystem) depend on it.
    *   Download Node.js (which includes npm) from the [official Node.js website](https://nodejs.org/).

### Accessing the Power of LLMs

Our AI agents **think** and **communicate** thanks to the power of Large Language Models (**LLM**) hosted by providers like Google. To interact with these models via **Kilo Code**, you will need personal API keys. In parallel, we will explore VS Code extensions that offer direct and often free access to AI capabilities for more immediate coding assistance.

#### The Google Gemini API

To power our specialized agents (**Senior Solution Architect** and **Senior Collaborative Developer**) configured in Kilo Code, you will need a Google API key granting access to Gemini models.

1.  **Obtaining Your Google Gemini API Key :**
    *   Navigate to [Google AI Studio](https://aistudio.google.com/).
    *   Sign in with your Google account. Accept the terms of service if it's your first visit.
    *   Once on the dashboard, look for an option like ****Get API key**** (often found in a side menu or a dedicated API section).
    *   You will likely need to create a new Google Cloud project (or select an existing one if you've used GCP services before). API key generation is often tied to a project.
    *   Click **Create API key** (or similar). A new unique alphanumeric key will be generated.
    *   **Crucial Action :** Copy this API key immediately and store it in an absolutely safe and private location (a password manager is ideal, or an encrypted local file). You generally cannot view the full key again after this initial generation.

2.  **Understanding Gemini Models and Their Access Plans (Information as of May 2025 – Always verify official documentation) :**
    *   **Gemini 2.5 Pro (Preview) :** Google's most advanced model currently in preview (the exact API model name might be like `gemini-2.5-pro-preview-MMDD` or `gemini-2.5-pro-latest` for the most recent preview version – always refer to the [official Gemini API models documentation](https://ai.google.dev/gemini-api/docs/models?hl=en)). It boasts superior reasoning capabilities and an extremely large context window (e.g., up to 1 million input tokens, with generous output limits like 65,536 tokens).
        *   **Preview Access & Free Tier via API :** Preview access may have specific conditions (e.g., sign-up). The associated free tier might have stricter rate limits (RPM – requests per minute / RPD – requests per day) (e.g., potentially around 2 RPM / 50 RPD, similar to previous Pro free tiers). *It is imperative to check the exact access conditions and quotas of the **free tier** for Preview models on the official documentation when you configure your access.* This model is ideal for the most complex planning and analysis tasks of our **Senior Solution Architect**, if the free tier throughput allows for your workflow.
    *   **Gemini 2.5 Flash :** This model is optimized for an excellent balance of high performance, potentially lower cost (if you move to paid plans), and increased response speed. It also features a very large context window.
        *   **Free Tier via API :** Rate limits for Gemini 2.5 Flash in free mode are generally much more comfortable for sustained interactive use (e.g., in the order of 15 RPM / 1500 RPD). This is an excellent default choice for most interactions with our agents in Kilo Code, especially for the **Senior Collaborative Full-Stack Developer**.
    *   **Paid Plans (Google AI Platform / Vertex AI) :** For intensive, professional use, or to benefit from service guarantees and higher rate limits, or to access enterprise features, using Gemini models via a billable Google Cloud project (on the Vertex AI platform) is recommended. (Note: The **GitHub Student Developer Pack**, if you are eligible, may occasionally include Google Cloud Platform credits, which could give you access to these paid options without initial direct cost for a period).
    *   **Your Single Source of Truth :** Always consult the [official Gemini API documentation](https://ai.google.dev/gemini-api/docs/models?hl=en) and the [Vertex AI pricing page for generative models](https://cloud.google.com/vertex-ai/generative-ai/pricing) for the most up-to-date and accurate information on available models, their exact capabilities, API names, and access/pricing terms. The AI landscape evolves very rapidly!

#### Gemini Code Assist & GitHub Copilot

In parallel with using Kilo Code for our specialized agents, which excel at complex tasks and long dialogues due to their detailed system prompts, it's extremely beneficial to integrate lighter-weight coding assistants directly into VS Code for more immediate, **in-flow** assistance.

*   **Gemini Code Assist (Official Google VS Code Extension) :**
    *   **What it offers :** Powered by Gemini models, it provides intelligent and contextual code completions, function and block generation, code explanations, and a chat interface for programming questions. A key strength is its ability to consider a large context window (up to 128,000 tokens for chat) based on the code currently open in your IDE.
    *   **Free Individual Plan (Information as of May 2025, based on your research) :**
        *   **Code-related requests (generation, completion) :** Typically high daily limits (e.g., up to 6,000 per day).
        *   **Chat requests :** Also comfortable daily limits (e.g., up to 240 per day).
        *   **Accessibility :** Easily installed as a VS Code extension (search **Gemini Code Assist**), connects to your Google account, and is generally ready to use without manual API key management for this specific use case.
        *   **Notable Limitations of the Free Plan :** Usually does not include fine-grained personalization based on analysis of your private source code repositories (often reserved for Enterprise plans) nor certain advanced integration features or enterprise-level guarantees.

*   **GitHub Copilot (GitHub/Microsoft VS Code Extension) :**
    *   **What it offers :** Highly renowned for the quality of its inline code suggestions (**auto-complétion**), its powerful contextual chat (**Copilot Chat**), and its project-wide code analysis capabilities. It leverages advanced models like **GPT-4o** and **Claude 3.5 Sonnet**.
    *   **Plans (Information as of May 2025) :**
        *   **Limited Free Plan (for some users) :** GitHub sometimes offers free access with monthly quotas (e.g., up to 2,000 code completions and 50 chat requests per month). This plan is mainly for experiencing the tool. Clear indicators signal when limits are reached.
        *   **GitHub Student Developer Pack : A Major Advantage !** If you are an eligible student and your pack is active, it very often includes **free and complete access to GitHub Copilot Individual** for the duration of your studies. This makes it an extremely powerful tool at no direct cost. Check your eligibility on the [GitHub Education website](https://education.github.com/pack).
        *   **Paid Plans (Individual, Business, Enterprise) :** Necessary for unlimited use and advanced features (policy management, IP indemnification, etc.) if you are not eligible for the Student Pack or for intensive professional use.
    *   **Installation :** Search for **GitHub Copilot** and **GitHub Copilot Chat** in the VS Code marketplace and install them. Connection is via your GitHub account.

**Strategic Articulation of These Tools :**
*   **Kilo Code + Gemini API (Pro/Flash) for Specialized Agents (Phase 1 & 2) :** This is the **core of our methodology** for holistic planning and strategic, documented development assistance. Kilo Code's flexibility in creating agents with **long, complex, and instruction-rich system prompts** (those we provide) is essential. The very large context window of Gemini 2.5 is a decisive asset here, enabling our **Senior Solution Architect** and **Senior Collaborative Developer** agents to maintain a deep understanding of the project over time.
    *   If you have free access to **GitHub Copilot via the GitHub Student Developer Pack**, leverage its power for these daily tasks. It's a significant advantage.
    *   **Gemini Code Assist** offers an excellent free alternative with very generous daily limits that will suit many developers for everyday assistance.
    *   There's no contraindication to using both tools, engaging whichever seems most relevant or performant for a given task.

#### Security of Your API Keys

It is crucial, and we cannot stress this enough, to treat your API keys (especially your Google Gemini API key used with Kilo Code) with the utmost care, as if they were the **keys to your digital kingdom** :
*   **NEVER write them directly into your source code.**
*   **NEVER share them with anyone.**
*   **NEVER commit them to a Git repository, even a private one.** A leaked API key can lead to significant costs if misused by third parties.
*   **Use Secure Mechanisms :** Kilo Code (and VS Code in general) is designed to store API keys and other secrets securely, often using your operating system's keychain or encrypted storage linked to your user profile. When you configure an API provider in Kilo Code, this mechanism is used. Trust these systems and do not attempt to bypass their security.

### Kilo Code

To orchestrate our specialized AI agents and implement our collaborative methodology, the VS Code extension [**Kilo Code**](https://kilocode.ai/) (or a similar open-source tool like its predecessor Roo-Code, if **Kilo Code** is not accessible to you) will be our platform of choice. **Kilo Code** stands out for its flexibility in creating personalized agents (**Custom Modes**), its ability to interact with various **LLM** providers, and its deep integration with the development environment.

> While this article focuses on **Kilo Code** due to its advanced features and evolution, the principles and prompts provided can often be adapted to other similar tools supporting custom system instructions and IDE capabilities.

#### Installation of the Kilo Code Extension

1.  **Open Visual Studio Code.**
2.  Navigate to the **Extensions** view by clicking the stacked squares icon in the side Activity Bar (or use the shortcut `Ctrl+Shift+X` or `Cmd+Shift+X` on Mac).
3.  In the extensions marketplace search bar, type **Kilo Code**.
4.  Locate the official extension (usually published by **Kilo AI** or a similar verified publisher, check download numbers and ratings for authenticity).
5.  Click the ****Install**** button. Once installation is complete, a reload or restart of VS Code might be suggested or required.

![Screenshot of the VS Code marketplace showing the Kilo Code extension ready for installation](https://kilocode.ai/docs/img/installing/installing.png)

#### Connecting Kilo Code to Your API Providers

After installing **Kilo Code**, the first and most crucial step is to connect it to the Large Language Models your agents will use.

1.  **Access Kilo Code's API Provider Settings :**
    *   Kilo Code has a dedicated interface for managing connections to various API providers (Google Gemini, OpenAI, Anthropic, OpenRouter, local models via Ollama, etc.).
    *   For precise instructions, consult the **Connecting to an API Provider** section of the [official Kilo Code documentation](https://kilocode.ai/docs/getting-started/connecting-api-provider).

2.  **Add Google Generative AI (for Gemini Models) as a Provider :**
    *   In Kilo Code's API provider management interface, choose the option to add a new provider or configure an existing one. Select **Google Generative AI** (or **Google Vertex AI** if you are using that platform, depending on Kilo Code's options).
    *   Kilo Code will then prompt you for your **Google Gemini API Key** (the one you obtained from Google AI Studio in step 3.2.1).
    *   Paste your API key into the designated field. Kilo Code is designed to store this key securely, typically using VS Code's secret storage mechanisms, not in a plain text, versionable configuration file.
    *   You will likely also be able to select a default model for this provider (ex: `gemini-2.5-flash-latest`).

3.  **(Optional) Configure Other Providers :**
    *   If you have API keys for other models (OpenAI's GPT, Anthropic's Claude) or if you use an aggregation service like OpenRouter, you can configure them in the same way by following the options offered by Kilo Code and its documentation.


#### Using the Example `kilo-code-settings.json` File

Our repository in the `/settings/` folder contains a file named `kilo_code_settings.json`. This file is an **example** of how some global Kilo Code settings *might* be structured if you wish to manage or share them via a JSON file.

*   **Content of the Example File :** It can illustrate how to define model aliases, default behaviors for certain actions (like action approval), or interface preferences. **Important : This example file in our repository does NOT and should NEVER contain REAL API keys.**
*   **How to Use It :** **Kilo Code**, as indicated in its [documentation on settings management](https://kilocode.ai/docs/features/settings-management), generally allows for importing and exporting its configuration.
    1.  First, explore the settings directly via Kilo Code's interface within VS Code (often accessible via `Ctrl+,` and by searching for **Kilo Code**, or via a dedicated Kilo Code command).
    2.  If you wish to use our example file as a base, you will need to import it using Kilo Code's **Import Settings** feature, or by copying and pasting relevant sections into your VS Code user `settings.json` file under Kilo Code's main configuration key.
    3.  **Caution is advised :** Ensure you understand each parameter before applying it. When in doubt, rely first on configuring Kilo Code via its graphical user interface.

### Integrating Custom Prompts

The core of our methodology lies in the extremely detailed **system instructions** (prompts) that define the personality, expertise, and operating mode of our AI agents. These prompts are provided as Markdown files in our GitHub repository.

#### Retrieving Prompt Files

1.  **Open your terminal or Git Bash.**
2.  **Navigate to a directory of your choice** on your computer where you wish to store these configurations (e.g., in your projects folder or a dedicated AI configurations folder).
3.  **Clone the `Devs_AI_Agents` GitHub repository** using the following command:
    ```bash
    git clone https://github.com/Adonis-Rwabira/Devs_AI_Agents.git
    ```
    This will create a local folder named `Devs_AI_Agents` containing all necessary files, including the prompts in the `/prompts/fr/` and `/prompts/en/` subdirectories.

#### Exploring the Devs_AI_Agents Repository

Once the repository is cloned, familiarize yourself with its structure (detailed in the `README.md` or `README_FR.md`). The prompt files of interest here are:

*   In `/prompts/en/`:
    *   `AGENT_SENIOR_SOLUTION_ARCHITECT_EN.md`
    *   `AGENT_SENIOR_COLLABORATIVE_DEVELOPER_EN.md`
    *   `AGENT_PROMPT_REFINEMENT_ANALYST_EN.md` (for your later use in prompt improvement)
*   Equivalent French versions are in `/prompts/fr/`.

#### Creating and Configuring Your Custom Modes

Kilo Code excels in its ability to let you define **Custom Modes**. Each mode is, in essence, a distinct AI agent with its own mission, its own instructions, its assigned **LLM** model, and its specific tools. For detailed and always up-to-date instructions, refer to the [Kilo Code documentation on Custom Modes](https://kilocode.ai/docs/features/custom-modes). Here's the general process for configuring our two primary agents:

1.  **Access Kilo Code's Mode Management Interface :**
    *   Open Kilo Code's chat panel in VS Code.
    *   Once the Kilo Code chat is open, locate the mode selector (often a dropdown menu at the top or bottom of the chat window displaying the currently active mode).
    *   Click this selector and look for an option like **+ Create new mode...**, **Manage Custom Modes**, or a similar button. Click it to open the mode creation/editing interface.

2.  **Configure the Mode for the Senior Solution Architect & Adaptive Partner Agent :**
    *   In Kilo Code's mode creation/editing interface:
        *   **Mode Name :** Enter a clear, descriptive name that you'll easily recognize. For example: **Strategic AI Architect** or **Senior Solution Architect**.
        *   **Mode Slug (Unique Identifier - optional but useful) :** Kilo Code may auto-generate this (e.g., `senior-solution-architect`), or you can specify one (lowercase with hyphens).
        *   **System Prompt (System Instructions) :** This is where the magic happens.
            *   Open the `prompts/en/AGENT_SENIOR_SOLUTION_ARCHITECT_EN.md` file (which you cloned) in VS Code or another text editor.
            *   Select **the entire content** of this file (`Ctrl+A` or `Cmd+A`).
            *   Copy it (`Ctrl+C` or `Cmd+C`).
            *   Paste it (`Ctrl+V` or `Cmd+V`) into the large text field labeled **System Prompt** (or **Instructions**, **Persona**, **Directives**, depending on the exact terminology of the Kilo Code interface for this section).
        *   **Model (AI Model) :**
            *   Select the Gemini model you want this agent to use, taking into account the complexity of its tasks. We recommend:
                *   `gemini-2.5-pro-preview-0605` (or the exact name of the latest Gemini 2.5 Pro Preview model available through your Kilo Code API configuration) for its analytical power and large context window, ideal for complex planning. Be mindful of free-tier rate limits.
                *   As a more flexible alternative in terms of free throughput, `gemini-2.5-flash-latest` can also be considered, although it might be slightly less performant on very complex reasoning tasks.
            *   Ensure the API provider for this model (Google Generative AI) is correctly configured with your API key in Kilo Code (see section 3.3.2).
        *   **Tools / Capabilities (Tools / Capabilities) :** Enable the tools (often managed via MCP servers in Kilo Code) this agent will need to interact with your environment. For the **Senior Solution Architect** :
            *   **File System (Read)** : Absolutely essential so it can read context files you provide (e.g., via **@file:relative/path/to/your/file.md**).
            *   **File System (Write)** : Very useful if you want it to help you generate or update drafts of your `.md` documents directly (with your approval for each action). **Important :** Ensure write action approval is set to **manual** in Kilo Code's global settings for control, as per [Kilo Code's documentation on action approval](https://kilocode.ai/docs/features/auto-approving-actions).
            *   **Web Search** : Can be useful for researching contextual information or examples.
            *   *(Multimodal Capabilities for Image Analysis) :* If your Gemini model is multimodal (like Gemini 2.5 Pro) and Kilo Code exposes a specific capability for it to analyze images you might reference (for example, via URL or an upload mechanism if Kilo Code supports it in the future), enable that capability. Otherwise, image analysis will be based on your detailed textual description of the image to the agent, or by providing a URL to the image if it has web access capability.
        *   **Save** this custom mode configuration.

3.  **Configure the Mode for the Senior Collaborative Full-Stack Developer Agent :**
    *   Repeat the process of creating a new custom mode.
    *   **Mode Name :** **Senior Collaborative Developer**
    *   **System Prompt :** Copy and paste the entire content of the `prompts/en/AGENT_SENIOR_COLLABORATIVE_DEVELOPER_EN.md` file.
    *   **Model :** Choose a Gemini model. `gemini-2.5-flash-latest` is often an excellent choice for responsive coding assistance and to stay within the free plan limits. `gemini-2.5-pro-preview-0605` can be used if very complex code reasoning tasks are planned.
    *   **Tools / Capabilities :** For the **Senior Collaborative Developer** :
        *   **File System (Read/Write)** : To read specifications and existing code, and to propose code modifications or new files (always with your approval for writes).
        *   **Terminal Access** : Extremely useful for the agent to suggest commands (e.g., `npm install nouvelle-lib`, `git status`, `python -m pytest mon_module_test.py`) or, with your explicit permission each time, execute them. Be particularly cautious and configure a list of **allowedCommands** in Kilo Code's global settings if possible.
        *   **Browser Control** : Could be used for advanced tasks like assisting with End-to-End tests or verifying page rendering.
        *   **Git Tools** (via an **MCP** tool if enabled) : Could allow the agent to help you with more complex Git operations.
    *   **Save** this custom mode configuration.

![Screenshot of Kilo Code's Custom Mode creation/editing interface, showing fields for Name, Slug (identifier), the large System Prompt area, AI Model selection (e.g., Gemini 2.5 Pro), and a list of activatable Tools/Capabilities with checkboxes.](https://kilocode.ai/docs/img/custom-modes/custom-modes.png)

#### The Power of Context Mentions

Once your modes (agents) are configured and ready to use, never forget to leverage the power of **Kilo Code**'s **Context Mentions** during your discussions. As detailed in the [Kilo Code documentation on context mentions](https://kilocode.ai/docs/basic-usage/context-mentions) (or a similar page), you can dynamically and targetedly inject content into the conversation using prefixes like:

*   **@file:relative/path/to/your/file.md** (or `.py`, `.js`, `.java`, etc.) for the agent to read and consider the content of that specific file in its response. This is how you will grant it access to your specification documents, existing code portions, etc.
*   **@folder:path/to/your/folder/** to provide the context of an entire folder (Kilo Code might then list files or, if the model is powerful enough, extract structural information).
*   **@url:https://relevant-online-documentation.com** for the agent to consult a webpage for up-to-date information or technical details.
*   Other Kilo Code-specific mentions (e.g., **@issue**, **@terminal**) may exist to reference specific elements within your workspace.

Judicious use of these context mentions is absolutely essential for your agents to have the most relevant and up-to-date information to assist you effectively, in line with our philosophy of **explicit context**.

### An Environment Primed

Congratulations! If you've followed these steps, your development environment is now truly **augmented**. You have:
*   The foundational tools (VS Code, Git).
*   Configured access to Google's powerful Gemini AI models via their APIs.
*   Complementary coding assistants (Gemini Code Assist, GitHub Copilot) for daily productivity.
*   And most importantly, **Kilo Code configured with two highly specialized and personalized AI agents**, ready to become your strategic partners for planning and implementing your software projects.

You have assembled your arsenal.
The next part will dive into the practical application of Phase 1 with our **Senior Solution Architect & Adaptive Partner**.

---
You have assembled your arsenal.

The [next part](part4_phase1_planning_ai_architect.md) will show you how to engage in dialogue with your first specialized agent, **Senior Solution Architect & Adaptive Partner**, to define the vision, elicit requirements, design the architecture, specify the UI/UX, and model the database for your project, and thus build exceptionally solid foundations.

**Previous Part :** [Part 2 : Philosophy of Collaboration](part2_philosophy_collaboration.md)