import test from "ava";
const { Mesh } = window.THREE;
import { GodRaysEffect } from "postprocessing";

test("can be created and destroyed", t => {

	const object = new GodRaysEffect(null, new Mesh());
	object.dispose();

	t.pass();

});
