using HainDanielsApi.Models;
using HainDanielsApi.Repositories;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Mvc;

namespace HainDanielsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditController : ControllerBase
    {
        public IApplicationRepository<AuditRecord> auditRepository;

        public AuditController(IApplicationRepository<AuditRecord> auditRepository)
        {
            this.auditRepository = auditRepository;
        }

        [HttpGet]
        public DataSourceResult GetAudit([DataSourceRequest] DataSourceRequest dataSourceRequest)
        {
            return auditRepository.GetItems().ToDataSourceResult(dataSourceRequest);
        }
    }
}
