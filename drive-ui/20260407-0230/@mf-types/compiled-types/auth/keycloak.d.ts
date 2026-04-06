/**
 * PolyON Drive — 인증 (Standalone 전용)
 *
 * OxiCloud 백엔드의 /polyon/auth/login → /polyon/auth/callback 플로우 활용.
 * KC 토큰을 직접 사용하지 않고, OxiCloud가 발급하는 HS256 JWT를 사용함.
 * (OxiCloud의 validate_token은 HS256만 지원)
 *
 * 플로우:
 *   브라우저 → GET /polyon/auth/login (OxiCloud가 state 생성 + KC redirect)
 *   KC 로그인 완료 → /polyon/auth/callback (OxiCloud가 code 교환 + DRIVE_SESSION 쿠키 설정)
 *   이후 API 요청 → DRIVE_SESSION 쿠키 자동 전송 (HttpOnly)
 *
 * 쿠키 기반이라 Authorization 헤더 불필요.
 */
/**
 * KC 로그인 시작 — OxiCloud /polyon/auth/login 으로 이동
 */
export declare function startLogin(): void;
/**
 * 현재 세션 유효 여부 확인 — /api/auth/me 호출
 * DRIVE_SESSION 쿠키가 있으면 자동으로 전송됨 (HttpOnly)
 */
export declare function checkSession(): Promise<boolean>;
/**
 * 로그아웃 — /polyon/auth/logout POST → KC SLO
 */
export declare function logout(): Promise<void>;
export declare function startSessionPolling(intervalMs?: number): void;
export declare function stopSessionPolling(): void;
