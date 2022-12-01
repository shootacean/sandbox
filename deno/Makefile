# hello
run-hello:
	deno run hello.ts

# hello-http
run-dev-hello-http:
	deno run --allow-net hello-http.ts

build-hello-http:
	deno compile --allow-net -o .bin/hello-http hello-http.ts 

run-start-hello-http: build-hello-http
	./.bin/hello-http
