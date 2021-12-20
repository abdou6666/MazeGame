const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const engine = Engine.create();
const { world } = engine;
const WIDTH = 800;
const HEIGHT = 600;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		width: WIDTH,
		height: HEIGHT,
		wireframes: false
	}
});
Render.run(render);
Runner.run(Runner.create(), engine);
// Walls
const walls = [
	Bodies.rectangle(400, 0, 800, 40, {
		isStatic: true
	}),

	Bodies.rectangle(400, 600, 800, 40, {
		isStatic: true
	}),
	Bodies.rectangle(0, 300, 40, 600, {
		isStatic: true
	}),
	Bodies.rectangle(800, 300, 40, 600, {
		isStatic: true
	})
];

World.add(
	world,
	MouseConstraint.create(engine, {
		mouse: Mouse.create(render.canvas)
	})
);
World.add(world, walls);

// Random Shapes
for (let i = 0; i < 60; i++) {
	if (Math.random() < 0.5) {
		World.add(world, Bodies.rectangle(Math.random() * HEIGHT, Math.random() * WIDTH, 50, 50));
	} else {
		World.add(
			world,
			Bodies.circle(Math.random() * HEIGHT, Math.random() * WIDTH, 35, {
				render: {
					fillStyle: '#ccc'
				}
			})
		);
	}
}
