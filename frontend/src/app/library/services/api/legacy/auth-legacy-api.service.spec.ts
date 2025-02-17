import { TestBed } from "@angular/core/testing";
import { AuthLegacyApiService } from "./auth-legacy-api.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("AuthApiService", () => {
  let service: AuthLegacyApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(AuthLegacyApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe("login", () => {
    it("should get a token", () => {
      const mockToken = "123";
      service.login("foo", "bar").subscribe(token => {
        expect(token).toEqual(mockToken);
      });

      const req = httpMock.expectOne(`${service.configUrl}/api-auth-token/`);
      expect(req.request.method).toBe("POST");
      req.flush({token: mockToken});
    });
  });
});
