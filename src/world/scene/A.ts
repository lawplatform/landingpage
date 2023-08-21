import * as BABYLON from "@babylonjs/core";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from "@babylonjs/core";
type OnSceneReadyHandler = (scene: BABYLON.Scene) => void
type OnRenderHandler = (scene: BABYLON.Scene) => void
import "@babylonjs/loaders/glTF";
const A = () => {
	let box: BABYLON.Mesh
	const onSceneReady: OnSceneReadyHandler = (scene) => {
		// Set background transparent 
		scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
		// This creates and positions a free camera (non-mesh)
		var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene)
		// This targets the camera to scene origin
		camera.setTarget(BABYLON.Vector3.Zero())
		const canvas = scene.getEngine().getRenderingCanvas()
		// This attaches the camera to the canvas
		camera.attachControl(canvas, true)

		// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
		var light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene)
		// Default intensity is 1. Let's dim the light a small amount
		light.intensity = 0.7
		// Our built-in 'box' shape.

		//load city background 
		let city: any;
		const result = SceneLoader.ImportMeshAsync(null, "/glb/", "city.glb", scene).then((result) => {
			city = result.meshes[0];
			//city.position.z = -1;
			//city.position.y = 5;

		});

		//Death of field Effect
		var lensEffect = new BABYLON.LensRenderingPipeline('lens', {
			edge_blur: 1.0,
			chromatic_aberration: 1.0,
			distortion: 1.0,
			dof_focus_distance: 100,
			dof_aperture: 6.0,          // set this very high for tilt-shift effect
			grain_amount: 1.0,
			dof_pentagon: true,
			dof_gain: 1.0,
			dof_threshold: 1.0,
			dof_darken: 0.25
			// @ts-ignore
		}, scene, 1.0, camera);

	}



	/**
	 * Will run on every frame render.  We are spinning the box on y-axis.
	 */
	const onRender: OnRenderHandler = (scene) => {
		if (box !== undefined) {
			//var deltaTimeInMillis = scene.getEngine().getDeltaTime()

			//const rpm = 10
			//box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
		}
	}
	return {
		onSceneReady,
		onRender
	}

}

export default A;
