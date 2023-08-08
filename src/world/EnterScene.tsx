import {
	Engine,
	EngineOptions,
	FreeCamera,
	HemisphericLight,
	Mesh,
	MeshBuilder,
	Scene,
	SceneOptions,
	Vector3,
} from '@babylonjs/core'
import React, { FC, useEffect, useRef, useState } from 'react'
import A from './scene/A'

type OnSceneReadyHandler = (scene: Scene) => void

type OnRenderHandler = (scene: Scene) => void

// import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.

type SceneComponentProps = {
	canvasId: string
	antialias?: boolean
	engineOptions?: EngineOptions
	adaptToDeviceRatio?: boolean
	sceneOptions?: SceneOptions
	onRender: OnRenderHandler
	onSceneReady: OnSceneReadyHandler
}

const SceneComponent: FC<SceneComponentProps> = (props) => {
	const reactCanvas = useRef(null)

	const {
		canvasId,
		antialias,
		engineOptions,
		adaptToDeviceRatio,
		sceneOptions,
		onRender,
		onSceneReady,
		...rest
	} = props

	useEffect(() => {
		if (!reactCanvas.current) return
		const engine = new Engine(
			reactCanvas.current,
			antialias,
			engineOptions,
			adaptToDeviceRatio
		)
		const scene = new Scene(engine, sceneOptions)
		if (scene.isReady()) {
			onSceneReady(scene)
		} else {
			scene.onReadyObservable.addOnce(onSceneReady)
		}

		engine.runRenderLoop(() => {
			onRender(scene)
			scene.render()
		})

		const resize = () => {
			scene.getEngine().resize()
		}

		if (window) {
			window.addEventListener('resize', resize)
		}

		return () => {
			scene.getEngine().dispose()

			if (window) {
				window.removeEventListener('resize', resize)
			}
		}
	}, [
		antialias,
		engineOptions,
		adaptToDeviceRatio,
		sceneOptions,
		onRender,
		onSceneReady,
	])

	return <canvas id={canvasId} ref={reactCanvas} {...rest} className="w-full" />
}



const EnterScene = () => {
	const [scene, SetScene] = useState(A);
	return (
		<div>
			<SceneComponent
				canvasId="babylon-canvas"
				antialias
				onSceneReady={scene.onSceneReady}
				onRender={scene.onRender}
			/>
		</div>
	)
}

export default EnterScene
