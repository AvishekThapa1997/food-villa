import { useRef, useCallback } from 'react';
function useDebounce(operation, delay) {
	let timeoutRef = useRef(null);
	const debounce = useCallback(
		function (...args) {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(() => {
				operation(...args);
			}, delay);
		},
		[operation, delay]
	);
	return debounce;
}

export default useDebounce;
