import * as BABYLON from "@babylonjs/core";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from "@babylonjs/core";
type OnSceneReadyHandler = (scene: BABYLON.Scene) => void
type OnRenderHandler = (scene: BABYLON.Scene) => void
import "@babylonjs/loaders/glTF";
let city: any;
let camera: any;
let light: any;
const A = () => {
	let box: BABYLON.Mesh
	const onSceneReady: OnSceneReadyHandler = (scene) => {
		// Set background transparent 
		scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
		scene.createDefaultCameraOrLight(true, true, true);
		// This creates and positions a free camera (non-mesh)
		camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene)
		// This targets the camera to scene origin
		camera.setTarget(BABYLON.Vector3.Zero())
		const canvas = scene.getEngine().getRenderingCanvas()
		// This attaches the camera to the canvas
		camera.attachControl(canvas, true)
		// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
		light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
		light.intensity = 5;
		//load city background 
		//let result = SceneLoader.ImportMeshAsync(null, "/glb/", "city.glb", scene).then((result) => {
		//city = result.meshes[0];
		//city.position.z = -2;
		//city.position.y = -0.4;
		//city.setPivotMatrix(BABYLON.Matrix.Translation(0, 0, 0));

		//camera.position = new BABYLON.Vector3(0, 10, -20); // Adjust the values as needed
		//camera.setTarget(city.position);

		//});
		BABYLON.SceneLoader.ImportMesh("", "/glb/", "city.glb", scene, function(meshes) {
			var model = meshes[0];

			// Create a rotation animation
			var rotationAnimation = new BABYLON.Animation("rotationAnimation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
			var keys = [];
			keys.push({
				frame: 0,
				value: 0
			});
			keys.push({
				frame: 100,
				value: Math.PI * 2
			});
			rotationAnimation.setKeys(keys);

			// Attach the animation to the model
			model.animations.push(rotationAnimation);

			// Run the animation
			scene.beginAnimation(model, 0, 100, true);
		});


		//BABYLON.SceneLoader.ImportMesh("city", "/glb/",
		//	"city.glb", scene, function(meshes) {
		//scene.createDefaultCameraOrLight(true, true, true);
		//scene.createDefaultEnvironment();
		//	});



		//Death of field Effect
		var lensEffect = new BABYLON.LensRenderingPipeline('lens', {
			edge_blur: 1.0,
			chromatic_aberration: 1.0,
			distortion: 1.0,
			dof_focus_distance: 20,
			// @ts-ignore
		}, scene, 1.0, camera);

	}
	/**
	 * Will run on every frame render.  We are spinning the box on y-axis.
	 */
	const onRender: OnRenderHandler = (scene) => {
		if (city !== undefined) {
			var deltaTimeInMillis = scene.getEngine().getDeltaTime()
			const rpm = 10
			light.position = camera.position;
			city.rotation.y += 3
			//(rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
		}
	}
	return {
		onSceneReady,
		onRender
	}

}

export default A;
