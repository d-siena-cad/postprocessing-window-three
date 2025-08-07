import test from "ava";
const { Scene } = window.THREE;
import { SelectiveBloomEffect } from "postprocessing";

test("can be created and destroyed", t => {

	const object = new SelectiveBloomEffect(new Scene(), null);
	object.dispose();

	t.pass();

});
