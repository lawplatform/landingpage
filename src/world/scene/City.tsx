// import "@babylonjs/inspector";
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh'
import React, { FC, Suspense, useEffect, useRef, useState } from 'react'
import * as BABYLON from "@babylonjs/core";
import { Engine, ILoadedModel, Model, Scene, useBeforeRender, useScene } from 'react-babylonjs'
import "@babylonjs/loaders/glTF";
import { LensRenderingPipeline } from '@babylonjs/core'
const City: FC = ({
}) => {
	let baseUrl = '/glb/';
	const scene = useScene()
	const modelRef = useRef<AbstractMesh | null>(null)
	const [y, setY] = useState(0)
	const onModelLoaded = (model: ILoadedModel) => {
		modelRef.current = model.rootMesh!
	}
	useEffect(() => {
		if (scene != null) {
			scene.clearColor = new Color4(0, 0, 0, 0);
			//add fog effect 
			scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
			scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85);
			scene.fogDensity = 0.01;


			var fountain = BABYLON.Mesh.CreateBox("foutain", 0.01, scene);
			fountain.position.x = 0.6;
			fountain.position.y = -0.8;
			fountain.position.z = 1.4;
			// Create a particle system
			var particleSystem = new BABYLON.ParticleSystem("particles", 100, scene);
			//Texture of each particle
			particleSystem.particleTexture = new BABYLON.Texture("/textures/flare.png", scene);

			// Where the particles come from
			particleSystem.emitter = fountain; // the starting object, the emitter
			particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0); // Starting all from
			particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...

			// Colors of all particles
			particleSystem.color1 = new BABYLON.Color4(0.97, 0.4, 0.4);
			particleSystem.color2 = new BABYLON.Color4(1, 0.66, 0.34);
			particleSystem.colorDead = new BABYLON.Color4(1, 1, 1, 0);

			// Size of each particle (random between...
			particleSystem.minSize = 0.1;
			particleSystem.maxSize = 0.5;

			// Life time of each particle (random between...
			particleSystem.minLifeTime = 0.3;
			particleSystem.maxLifeTime = 1.5;

			// Emission rate
			particleSystem.emitRate = 200;

			// Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
			particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

			// Set the gravity of all particles
			particleSystem.gravity = new BABYLON.Vector3(0, 10, 0);

			// Direction of each particle after it has been emitted

			particleSystem.direction2 = new BABYLON.Vector3(0, 4, 0);

			// Angular speed, in radians
			particleSystem.minAngularSpeed = 0;
			particleSystem.maxAngularSpeed = Math.PI;
			particleSystem.noiseStrength.x = 54;
			particleSystem.noiseStrength.y = 28.50;
			particleSystem.noiseStrength.z = 42;
			// Speed
			particleSystem.minEmitPower = 0;
			particleSystem.maxEmitPower = 0;
			particleSystem.updateSpeed = 0.003;

			// Noise
			var noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
			noiseTexture.animationSpeedFactor = 5;
			noiseTexture.persistence = 2;
			noiseTexture.brightness = 0.5;
			noiseTexture.octaves = 2;

			particleSystem.noiseTexture = noiseTexture;
			particleSystem.noiseStrength = new BABYLON.Vector3(100, 100, 100);

			// Start the particle system
			particleSystem.start();
		}
		if (modelRef.current) {
		}
	}, [])
	let alpha = 0;
	useBeforeRender(() => {
		if (!scene) return
		const deltaTimeInMillis = scene.getEngine().getDeltaTime()
		setY((oldY) => oldY + (1 / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))

	})

	return (
		<Suspense fallback={<box name="fallback" position={new Vector3(0, 0, 0)} />}>
			<Model
				name="city"
				rootUrl={`${baseUrl}`}
				sceneFilename={`city_3.glb`}
				scaleToDimension={1}
				position={new Vector3(0, -1, 5)}
				onModelLoaded={onModelLoaded}
				rotation={new Vector3(0, y, 0)}
				scaling={new Vector3(3, 3, 3)}
			/>
		</Suspense >
	)
}

export default City;
