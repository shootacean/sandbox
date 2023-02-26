hello:
	docker run --rm \
		-v $(shell pwd):/app -w /app openjdk:17 \
		sh -c 'ls -al && javac HelloWorld.java && jar cvfe HelloWorld.jar HelloWorld HelloWorld.class && java -jar HelloWorld.jar'
