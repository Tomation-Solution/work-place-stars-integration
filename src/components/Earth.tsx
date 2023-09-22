

const Earth = () => {
  return (
    <>
    <ambientLight />
        <mesh>
            <sphereGeometry args={[1,32,32]} />
            <meshPhongMaterial color="#044B69" />
        </mesh>
    </>
  )
}

export default Earth