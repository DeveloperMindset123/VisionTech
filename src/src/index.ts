/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

/**
 * @usage your are now ready to run an inference task in your worker.
 * @usage IN this case, the LLM being used is llama-3.1-8b-instruct is being used to answer a question.
 */

export interface Env {
	// If you set another name in wranger.toml as the value for 'binding'
	// replace "AI" with the variable name you defined.
	AI: Ai;
}
export default {
	async fetch(request, env, ctx): Promise<Response> {
		const response = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
			prompt: 'Who are you?',
		});
		return new Response(JSON.stringify(response));
	},
} satisfies ExportedHandler<Env>;
