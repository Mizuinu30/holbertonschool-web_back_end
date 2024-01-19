import ClassRoom from './0-classroom';

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = roomSizes.map((roomSize) => new ClassRoom(roomSize));
  return rooms;
}

export default initializeRooms;
