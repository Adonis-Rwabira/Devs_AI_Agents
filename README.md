# Devs_AI_Agents: Master AI for Your Software Projects – Prompts and Methodology

Welcome to the **Devs_AI_Agents** repository! This project is dedicated to all developers wish to transform their way of working with Artificial Intelligence, moving from simple use to a **strategic and highly productive collaboration**.

We offer a comprehensive methodology here, acompanada by ready-to-use "system prompts" (custom instructions), to configure specialized AI agents. These agents are designed to expertly and proactively assist you during the crucial phases of **planning, design, and implementation** of your software projects.

The goal is to help you "tame AI," overcome common frustrations associated with misunderstood AI, and harness its full potential to boost your productivity and the quality of your work.

**Author:** Adonis Rwabira
*Full-Stack Developer and Software Engineer*
*Goma, Democratic Republic of Congo*
*adonisbitigaywa@gmail.com*

---

## About This Repository

This repository is the practical companion to our series of articles (available in the `/articles/en/` folder) titled: **"Tame AI and Boost Your Productivity: Smart Collaboration to Better Develop Your Software Projects."**

Here you will find the following resources:

1.  **Detailed System Prompts for AI Agents (in `/prompts/en/`)**:
    *   `AGENT_SENIOR_SOLUTION_ARCHITECT_EN.md`: The complete system prompt to configure your "Senior Solution Architect & Adaptive Partner" AI agent. This agent is your strategic co-designer for **Phase 1: Holistic Planning** (defining requirements, architecture, UI/UX, database schema).
    *   `AGENT_SENIOR_COLLABORATIVE_DEVELOPER_EN.md`: The complete system prompt to configure your "Senior Collaborative Full-Stack Developer" AI agent. This agent is your expert technical partner for **Phase 2: Collaborative Implementation** (coding, reviews, testing, technical documentation).
2.  **Example Configuration File (for Roo-Code, in `/settings/`)**:
    *   `roo-code-settings.json`: An example file padrões some global configurations for the VS Code extension [Roo-Code](https://docs.roocode.com/). *Note: This file is an example and does not contain any API keys. You will need to adapt and integrate your own settings according to Roo-Code's documentation.*
3.  **Full Articles (in `/articles/`)**:
    *   `/articles/en/`: (Forthcoming) Contains the 9 parts of the detailed article in English, explaining the philosophy, methodology, configuration, and use of these agents.
    *   `/articles/fr/`: Contains the 9 parts of the detailed article in French.
4.  **Licenses (at the root)**:
    *   `LICENSE.txt`: Specify the terms of use for the prompts and configuration file.

## The Philosophy: A Demanding but Powerful Human-AI Synergy

The proposed approach is based on a strong conviction: AI, to be truly useful in complex projects, should not be left to operate with full autonomy. It excels when **guided by rich context and precise instructions**.

Our methodology aims to:
*   **Combat AI "Drifting"** by focusing it on specific tasks within a well-defined framework.
*   **Utilize AI for In-Depth Planning:** The "Senior Solution Architect" agent helps you explore all facets of your project, ask the right questions, identify risks, and co-construct exhaustive documentation *before* coding.
*   **Streamline Implementation:** The "Senior Collaborative Developer" agent then leverages this solid documentation to assist you in coding more relevantly and efficiently.
*   **Maintain the Developer as the Strategic Pilot:** AI is a powerful co-pilot, but you remain the final decision-maker, validating each key step and bringing your irreplaceable business expertise.

We invite you to read the full series of articles for a thorough understanding of the concepts and benefits of this structured collaboration.

## Quick Start Guide (with Roo-Code)

Although the full article (especially Part 3) details each step, here's a quick overview to use these prompts with the VS Code extension [Roo-Code](https://docs.roocode.com/):

1.  **Prerequisites:**
    *   VS Code installed.
    *   Roo-Code extension installed from the VS Code marketplace.
    *   An API key for a powerful language model (e.g., Google Gemini 2.5 Pro or Flash), configured in Roo-Code (see [their documentation for connecting an API provider](https://docs.roocode.com/getting-started/connecting-api-provider)).
2.  **Clone This Repository:**
    ```bash
    git clone https://github.com/Adonis-Rwabira/Devs_AI_Agents.git
    cd Devs_AI_Agents
    ```
3.  **Create "Custom Modes" in Roo-Code:**
    *   Open Roo-Code in VS Code.
    *   Use Roo-Code's interface to create a new "custom mode" (see [their documentation on custom modes](https://docs.roocode.com/features/custom-modes)).
    *   **For the Architect Agent:**
        *   Name the mode (e.g., `My Senior AI Architect`).
        *   Copy the entire content of `prompts/en/AGENT_SENIOR_SOLUTION_ARCHITECT_EN.md` and paste it into the "System Prompt" field of the mode.
        *   Select the desired AI model (e.g., `gemini-2.5-pro-preview-0605`).
        *   Enable necessary "Tools" (capabilities) (e.g., `File System (Read/Write)`).
        *   Save.
    *   **For the Developer Agent:**
        *   Create another mode (e.g., `My Senior AI Co-Developer`).
        *   Copy the content of `prompts/en/AGENT_SENIOR_COLLABORATIVE_DEVELOPER_EN.md` into the "System Prompt".
        *   Select the AI model (e.g., `gemini-2.5-flash-latest` or Pro).
        *   Enable "Tools" (e.g., `File System (Read/Write)`, `Terminal Access`).
        *   Save.
4.  **Start Collaborating!**
    *   Select the "My Senior AI Architect" mode in Roo-Code to begin Phase 1 planning for your project.
    *   Use "Context Mentions" (`@file`, `@folder`) to provide specific information to the agent (see [Roo-Code documentation on mentions](https://docs.roocode.com/basic-usage/context-mentions)).
    *   Remember to configure action approval settings (manual approval recommended) for sensitive operations ([see Roo-Code documentation on action approval](https://docs.roocode.com/features/auto-approving-actions)).

## Contributing and Providing Feedback

This project is an open initiative continuous improvement. Your experience, feedback, and contributions are essential.

*   **Discussions and Suggestions:** Please use the **"Issues"** section of this repository to ask questions, share your thoughts on the methodology, suggest improvements for the prompts, or point out areas માટે clarification.
*   **Contributions to Prompts:** If you have concrete, tested modifications or additions to propose for the prompt files, please feel free to submit a **"Pull Request"**.

Together, we can refine this approach to make human-AI collaboration even more powerful and accessible to all developers.

---

Thank you for your interest and happy reading of the full article!

**Adonis Rwabira**
